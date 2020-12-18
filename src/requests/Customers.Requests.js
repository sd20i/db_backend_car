const AssociationModels = require("../models/TestCombined");
const { Customer } = require("../models/CustomersModel");

const createNewUser = async (verifiedToken) => {
  try {
    return await Customer.findOrCreate({
      where: { c_fb_id: verifiedToken.user_id },
      defaults: {
        c_name: verifiedToken.name,
        c_email: verifiedToken.email,
      },
    }).then((user, created) => {
      return user;
    });
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
};

const updateCustomer = async (customer) => {
  return await Customer.update(
    {
      c_phone: customer.c_phone,
      c_number: customer.c_number,
      c_floor: customer.c_floor,
      c_street: customer.c_street,
      c_zip: customer.c_zip,
      c_city: customer.c_city,
      c_country: customer.c_country,
    },
    { returning: true, where: { c_fb_id: customer.c_fb_id } }
  ).catch((err) => {
    console.log(err);
    return customer;
  });
};

module.exports = { createNewUser, updateCustomer };
