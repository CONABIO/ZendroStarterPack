const path = require('path')
const models = require(path.join(__dirname, '..', 'models', 'index.js'));

/**
 * @function - Builds a sipecam calendar given a initial date, and store it in visits model.
 *
 * @param  {string} initialDate     a string containing the initial date.
 * @param  {number} firstVisitId    a number containing the the id of the first visit.
 * @param  {number} cumulusId       a number containing the cumulus id.
 */
module.exports = async (initialDate,firstVisitId,cumulusId) => {

    if (initialDate) { // check if initial date was setted

        let dates = [];

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
        for (let i = 0; i < 5; i++) {
            if (i === 0) {
                await models.visit.update({
                    date_sipecam_first_season: dates[0],
                    date_sipecam_second_season: dates[5]
                }, {
                    where: { id: firstVisitId }
                })
            } else {
                await models.visit.create({
                    date_sipecam_first_season: dates[i],
                    date_sipecam_second_season: dates[5 + i],
                    cumulus_id: cumulusId
                })
            }
        }
    }
}
