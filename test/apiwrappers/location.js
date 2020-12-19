var apihelper = require("../utils/apihelper");
apihelper = new apihelper();
const config = require("../../resources/config.json");
let api_uri = config.api_uri;
let body = [
  {
    clientId: "test-hiring",
    id: "Junk_ID_1",
    code: "DOE7D6OR",
    name: "sdet_test_1",
    type: "KITCHEN",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "?????????",
      formattedAddress: "1111111112233",
      localityName: "??????",
      pincode: "??????",
      city: "??????",
      state: "??????",
      countryCode: "IN",
    },
    timeSlots: [],
    transactionDuration: 1800,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
  {
    clientId: "test-hiring",
    id: "Valid_ID_1",
    code: "O6ODE6DE",
    name: "sdet_test_2",
    type: "CLIENT",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "Central Warehouse",
      formattedAddress: "23rd Cross, 4th Main, Block 4, Koramangala, Bengaluru",
      localityName: "HSR",
      pincode: "560102",
      city: "Bengaluru",
      state: "Karnataka",
      countryCode: "IN",
    },
    latLng: {
      lat: "12.94715",
      lng: "77.57888",
    },
    timeSlots: [],
    transactionDuration: 3000,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
  {
    clientId: "test-hiring",
    id: "Valid_ID_2",
    code: "8RRDRRRD1",
    name: "sdet_test_3",
    type: "CLIENT",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "Central Warehouse",
      formattedAddress: "Ejipura, Bengaluru",
      localityName: "Ejipura",
      pincode: "560047",
      city: "Bengaluru",
      state: "Karnataka",
      countryCode: "IN",
    },
    latLng: {
      lat: "12.9448307",
      lng: "77.6178788",
    },
    timeSlots: [],
    transactionDuration: 1800,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
  {
    clientId: "test-hiring",
    id: "ARUN123458",
    code: "OORO5R6R",
    name: "sdet_test_4",
    type: "CLIENT",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "Central Warehouse",
      formattedAddress: "23rd Cross, 4th Main, Block 4, Koramangala, Bengaluru",
      localityName: "HSR",
      pincode: "560102",
      city: "Bengaluru",
      state: "Karnataka",
      countryCode: "IN",
    },
    latLng: {
      lat: "12.94715",
      lng: "77.57888",
    },
    timeSlots: [],
    transactionDuration: 3000,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
  {
    clientId: "test-hiring",
    id: "68E8R7R8",
    code: "68E8R7R8",
    name: "sdet_test_5",
    type: "CLIENT",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "Central Warehouse",
      formattedAddress: "23rd Cross, 4th Main, Block 4, Koramangala, Bengaluru",
      localityName: "Koramangala",
      pincode: "560034",
      city: "Bengaluru",
      state: "Karnataka",
      countryCode: "IN",
    },
    latLng: {
      lat: "12.94509",
      lng: "77.619343",
    },
    timeSlots: [],
    transactionDuration: 3600,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
  {
    clientId: "test-hiring",
    id: "E71DOR6O",
    code: "E71DOR6O",
    name: "sdet_test_6",
    type: "CLIENT",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "Central Warehouse",
      formattedAddress: "23rd Cross, 4th Main, Block 4, Koramangala, Bengaluru",
      localityName: "HSR",
      pincode: "560102",
      city: "Bengaluru",
      state: "Karnataka",
      countryCode: "IN",
    },
    latLng: {
      lat: "12.94715",
      lng: "77.57888",
    },
    timeSlots: [],
    transactionDuration: 3000,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
  {
    clientId: "test-hiring",
    id: "EE18RROO",
    code: "EE18RROO",
    name: "sdet_test_7",
    type: "CLIENT",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "Central Warehouse",
      formattedAddress: "23rd Cross, 4th Main, Block 4, Koramangala, Bengaluru",
      localityName: "Koramangala",
      pincode: "560034",
      city: "Bengaluru",
      state: "Karnataka",
      countryCode: "IN",
    },
    latLng: {
      lat: "12.94509",
      lng: "77.619343",
    },
    timeSlots: [],
    transactionDuration: 4200,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
  {
    clientId: "test-hiring",
    id: "RR1RR567",
    code: "RR1RR567",
    name: "sdet_test_8",
    type: "CLIENT",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "Central Warehouse",
      formattedAddress: "23rd Cross, 4th Main, Block 4, Koramangala, Bengaluru",
      localityName: "HSR",
      pincode: "560102",
      city: "Bengaluru",
      state: "Karnataka",
      countryCode: "IN",
    },
    latLng: {
      lat: "12.94715",
      lng: "77.57888",
    },
    timeSlots: [],
    transactionDuration: 3000,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
  {
    clientId: "test-hiring",
    id: "1E5D15R5",
    code: "1E5D15R5",
    name: "sdet_test_9",
    type: "CLIENT",
    teams: [
      {
        clientId: "test-hiring",
        teamId: "spmd",
      },
    ],
    address: {
      placeName: "Central Warehouse",
      formattedAddress: "23rd Cross, 4th Main, Block 4, Koramangala, Bengaluru",
      localityName: "Koramangala",
      pincode: "560034",
      city: "Bengaluru",
      state: "Karnataka",
      countryCode: "IN",
    },
    latLng: {
      lat: "12.94509",
      lng: "77.619343",
    },
    timeSlots: [],
    transactionDuration: 5400,
    users: [],
    skills: [],
    vehicleModels: [],
    customProperties: {},
    pincodes: [],
    locationLearningAudit: [],
  },
];

class location {
  /**
   * Validate Location API
   * @return {jsonResponse} JSON Response of location API.
   */

  async postlocation(overwrite) {
    apihelper.log(
      `Calling the location api ${api_uri}/v1/client/test-hiring/location?`
    );
    let response = await apihelper.post(
      `${api_uri}/v1/client/test-hiring/location?overwrite=${overwrite}`,
      body
    );
    return response;
  }

  async verifygeolocation(locationId) {
    let body = {
      locationIds: [locationId],
    };
    apihelper.log(
      `Calling the location api ${api_uri}/v1/client/test-hiring/verify-location-geocode`
    );
    let response = await apihelper.post(
      `${api_uri}/v1/client/test-hiring/verify-location-geocode`,
      body
    );
    return response;
  }
}
module.exports = location;
