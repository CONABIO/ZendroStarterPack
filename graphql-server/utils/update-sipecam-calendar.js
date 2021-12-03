const path = require('path')
const cumulus = require(path.join(__dirname, '..', 'models', 'index.js')).cumulus
const visit = require(path.join(__dirname, '..', 'models', 'index.js')).visit
const buildSipecamCalendar = require('./build-sipecam-calendar');

/**
 * @function - Updates visit calendar given the first visit date for
 *              all the visits associated with a cumulus.
 *
 * @param  {object} updateData    a visit object with update data.
 * @param  {object} updatedVisit    a visit object with update data.
 * 
 * @return {null}         this function does not return nothing
 */
module.exports = async (updateData,updatedVisit) => {
    if(updateData.date_first_season && updatedVisit.cumulus_id) {

        // get all associated visits with the cumulus
        var modelCumulus = await cumulus.findOne({ 
            where: { id: updatedVisit.cumulus_id },
            include: [
                {
                    model: visit,
                    as: "visits"
                }
            ],
            order: [['visits','date_sipecam_first_season', 'asc']] });
        
        if(
            modelCumulus.visits[0].date_sipecam_first_season
            === 
            updatedVisit.date_sipecam_first_season) {
                /*
                   *  If date_sipecam_first_season from the first position of
                   *  the array matches the date_sipecam_first_season of the 
                   *  updated visit then updated value corresponds to the first
                   *  visit.
                   */

                // to store calendar dates
                let dates = [];
                let initialDate = updateData.date_first_season;
        
                
                /*
                    Date function to add the given number of
                    days to the chosen date.
                 */
                Date.prototype.addDays = function(days) {
                    var date = new Date(this.valueOf());
                    date.setDate(date.getDate() + days);
                    return date;
                }
        
                // build calendar
                let date = new Date(initialDate);
                for (let j = 0; j < 2; j++) {
                    for (let i = 0; i < 5; i++) {
                        dates.push(date);
                        date = date.addDays(36);
                    }
                    date = new Date(initialDate);
                    date = date.addDays(36 * 5);
                }
        
                // create visits
                for (let i = 0; i < modelCumulus.visits.length; i++) {
                    await visit.update({
                        date_sipecam_first_season: dates[i],
                        date_sipecam_second_season: dates[5 + i]
                    }, {
                        where: { id: modelCumulus.visits[i].id }
                    })
                }
            }
    }
}
