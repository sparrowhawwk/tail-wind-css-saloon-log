import User from '../../../models/users';
import connectDB from '../../../middleware/mongoose';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectDB();

    const { first_name, last_name, phone_number, cs_age, cs_amount, cs_gender } = req.body;

    const newUser = new Customer({
      first_name,
      last_name,
      phone_number,
      cs_age,
      cs_amount,
      cs_gender,
    });

    const result = await newUser.save({ wtimeout: 30000 }); // set timeout to 30 seconds


    // const result = await newUser.save();
    res.status(201).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default connectDB(handler);







