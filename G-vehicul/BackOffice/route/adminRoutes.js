//Login by Administrator
router.post("/login", managerController.login);

//Manager add
router.post("/manager", managerController.registerManager);

//Manager UpdateOneSingleContent
router.patch("/manager/:id", managerController.updateManager);

//manager GetContent
router.get("/managers", managerController.get);

module.exports = router;
