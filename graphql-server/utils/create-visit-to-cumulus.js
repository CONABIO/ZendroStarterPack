const path = require('path')
const cumulus = require(path.join(__dirname, '..', 'models', 'index.js')).cumulus
const visit = require(path.join(__dirname, '..', 'models', 'index.js')).visit
const buildSipecamCalendar = require('./build-sipecam-calendar');

/**
 * @function - Given a cumulus id, checks if has visits associated, if not then creates a visit calendar.
 *
 * @param  {number} cumulusId    a number containing the cumulus id.
 */
module.exports = async (cumulusId) => {
    /* Get cumulus by its id */
    var model = await cumulus.findOne({ 
        where: { id: cumulusId },
        include: [
            {
                model: visit,
                as: "visits"
            }
        ] });

    /*
        Date function to add the given number of
        days to the chosen date.
     */
    Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    /*
        Deletes all visits associated with cumulus
        that doesn't have a sipecam date.
     */
    const deleteVisits = async (visits) => {
        for(let visit of model.visits) {
            if(!visit.date_sipecam_first_season)
                await visit.destroy({ where: { id: visit.id } });
        }
    }

    if(model.visits.length == 1) {
    /*
        if there's only one visit associated with the cumulus
        tries to build the visit calendar.
     */
        await buildSipecamCalendar(
            model.visits[0].date_first_season,
            model.visits[0].id,
            cumulusId);

    }   else if (
            model.visits.length > 1 
            && model.visits.length < 5
        ) {
    /* 
        if there is more visits associated to the cumulus, but not all the 
        visits that it should have, then build the calendar finding the
        first visit with field date_first_season with a value
     */
        // find the visit with the first date of the first season
        let found = model.visits.find(visit => visit.date_first_season);

        if (found)
            await buildSipecamCalendar(
                found.date_first_season,
                found.id,
                cumulusId);

        // delete visits that doesn't have sipecam dates
        await deleteVisits(model.visits);

    } else if ( model.visits.length > 5 ) {
    /* 
        if there are more than five visits associated to the cumulus, checks
        if all the visits has sipecam dates, if not then builds a calendar
        with the more recent created date that has a date_first_season field
        filled, and deletes all the remaining visits that doesn't have sipecam
        dates. 
     */
        let found = model.visits.find(visit => !visit.date_sipecam_first_season);

        if (found) {
            let recentCreated = model.visits.reduce((a,b) => a.createdAt > b.createdAt ? a : b);
            await buildSipecamCalendar(
                recentCreated.date_first_season,
                recentCreated.id,
                cumulusId);
            }

        // delete visits that doesn't have sipecam dates 
        await deleteVisits(model.visits);
    }
}
