import clientPromise from '../../lib/mongodb';

export default async (req, res) => {
    try {
        const client = await clientPromise;
        const db = client.db('sample_airbnb');
        const listing = await db
            .collection('listingsAndReviews')
            .find({})
            .limit(10)
            .toArray();
        res.json(listing);
    } catch (e) {
        console.error(e);
    }
}