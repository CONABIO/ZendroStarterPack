const path = require('path')
const cumulus = require(path.join(__dirname, '..', 'models', 'index.js')).cumulus
const visit = require(path.join(__dirname, '..', 'models', 'index.js')).visit

/**
 * @function - Given a cumulus id, checks if has visits associated, if not then creates a visit calendar.
 *
 * @param  {number} cumulusId    a number containing the cumulus id.\
 */
module.exports = async (cumulusId) => {
    /* Get cumulus by its id */
    let model = await cumulus.findOne({ 
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

    if(model.visits.length == 1) {
        let initialDate = model.visits[0].date_first_season;

        if(initialDate) { // check if initial date was setted

            let dates = [];

            // build calendar
            let date = new Date(initialDate);
            for(let j=0;j<2;j++) {
                for(let i=0;i<5;i++) {
                    dates.push(date);
                    date = date.addDays(36);
                }
                date = new Date(initialDate);
                date = date.addDays(36*5);
            }
    
            // create visits
            for(let i=0;i<5;i++) {
                if(i === 0) {
                    await visit.update({
                        date_sipecam_first_season: dates[0],
                        date_sipecam_second_season: dates[5]
                    },{
                        where: { id: model.visits[0].id }
                    })
                } else {
                    await visit.create({
                        date_sipecam_first_season: dates[i],
                        date_sipecam_second_season: dates[5+i],
                        cumulus_id: cumulusId
                    })
                }
            }
        }
    }
}
