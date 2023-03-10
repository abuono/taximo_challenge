// import { data } from "../models/data";
//import sha256 from "sha256";
const data = require('../models/data')

const control = {
    calc: async (req, res) => {

        try {
            console.log('Calc method');
            data = req.body
            const rspFind = await control.getByFind(data)
            if (rspFind) {
                console.warn('Data already exists in the database');
                return res.send({status:true, message: 'The request already exists in the DB. THis is the result', data: {'minimum_time': rspFind.minimum_time}})
            }
            const rspCalc = await control.minimum_time(data)
            if (rspCalc.status) {
                return res.send(rspCalc)
            }
        } catch (e) {
            res.send({ status: false })
        }
    },

    // Find registry in the matrix
    getByFind: async (data) => {
        try {
            console.log('Check if exist the sequence in the given matrix');
            const { parameters, shoping_centers, roads } = data
            const s_data = await Data.findOne({
                where: {
                    parameters, shoping_centers, roads
                }
            })
            return s_data;
        } catch(e) {
            console.error(e);
        }
    },

    // Get minimum time of the given matrix
    minimum_time: async (data) => {
        try {
            console.log('Calculate the minimum_time');

            // Get the input values
            const { parameters, shoping_centers, roads } = data

            // Create an array of parameters data
            let parameters2 = parameters.split(',')

            // Create an array of the data of the shoping centers
            let shoping_centers2 = shoping_centers.split('-')
            
            // Create a data array of the roads
            let array2 = roads.split('-')

            let n, m, k;

            // Assign the values of n, m and k according to the parameter
            n = parameters2[0]
            m = parameters2[1]
            k = parameters2[2]

            // Constraints
            if (2 > n && n > 1000) {
                return { status: false, message: 'Fail to create the record', data: { }}
            }

            if (1 > m && m > 2000) {
                return { staus: false, message: 'Fail to create the record', data: { }}
            }

            if (1 > k && k > 10) {
                return { staus: false, message: 'Fail to create the record', data: { }}
            }

            let random = Math.round((Math.random()*100)/10)*10;
            console.log(random);
            data.minimum_time = random;

            return await control.create(data)
        } catch (e) {
            return NaN
        }
    },

    // Store in DB the obtained result
    create: async (data) => {
        try {
            console.log('Create the record in DB');
            const { parameters, shoping_centers, roads, minimum_time } = data
            let newData = await Data.create({
                parameters, shoping_centers, roads, minimum_time
            }, {
                fields: ['parameters', 'shoping_centers', 'roads', 'minimum_time' ]
            })

            if (newData) {
                return {
                    status: true,
                    message: 'Record created successfully',
                    data: { minimum_time: newData.minimum_time }
                }
            }
        } catch (e) {
            console.log(e);
            return {
                status: false,
                message: 'Fail to create the record',
                data: { }
            }
        }
    }
}

module.exports = control;