import {db} from '../../../utils/db';

export default async (req, res) => {
  try {
    const rooms = await db.collection('rooms').orderBy('created').get();
    const roomsData = rooms.docs.map(entry => ({
      ...entry.data()
    }));
    res.status(200).json({ roomsData });
  } catch (e) {
    res.status(400).end();
  }
}
