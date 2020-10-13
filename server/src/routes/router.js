const router = require('express').Router();

const journalController = require('../controllers/journalController');
const userController = require('../controllers/userController');
const wishlistController = require('../controllers/wishlistController');
const watchedlistController = require('../controllers/watchedlistController');

router
  .route('/wishlist')
  .get(wishlistController.getAll)
  .post(wishlistController.postOne);

  router.delete('/wishlist/:movieId', wishlistController.removeOne);


router
  .route('/watched/')
  .get(watchedlistController.getAll)
  .post(watchedlistController.postOne);

router.delete('/watched/:movieId', watchedlistController.removeOne);

router.post('/user', userController.postOne);

router
  .route('/user/:userId')
  .get(userController.getOne)
  .delete(userController.removeOne);


router.get('/journals', journalController.getAllJournals);
router.post('/journals', journalController.postJournal);

router.get('/journals/:journalId', journalController.getJournal);
router.put('/journals/:journalId', journalController.updateJournal);
router.delete('/journals/:journalId', journalController.deleteJournal);

module.exports = router;
