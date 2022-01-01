import {db} from '../../../utils/db';

export default async (req, res) => {
  try {
      const response = await db.collection('rooms').update({
        players: firebase.firestore.FieldValue.arrayUnion(req.body),
        updatedAt: new Date().toISOString(),
      });
      res.status(200).json(response.id);
  } catch (e) {
    res.status(400).end();
  }
}
