import {db} from '../../../utils/db';

export default async (req, res) => {
  const { id } = req.query;

  try {
    if (req.method === 'PUT') {
      console.log(req.body)
      await db.collection('users').doc(id).update({
        ...req.body,
        updated: new Date().toISOString(),
      });
    } else if (req.method === 'GET') {
      const doc = await db.collection('users').where("uid", "==", req.query.id).get()
      .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (!doc.exists) {
              res.status(404).end();
            } else {
              console.log(doc.data())
              res.status(200).json(doc.data());
            }
          });
      })
    } else if (req.method === 'DELETE') {
      await db.collection('users').doc(id).delete();
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
}