const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (token == null) return res.sendStatus(401); 
  
    jwt.verify(token, 'your_jwt_secret_key', (err, user) => {
      if (err) return res.sendStatus(403); 
      req.user = user;
      next();
    });
  };
  
  app.get('/profile', authenticateToken, async (req, res) => {
      try {
        const user = await StepUserModel.findById(req.email);
        if (!user) {
          return res.status(404).send('User not found');
        }
        res.json(user);
      } catch (error) {
        console.error('Error fetching profile:', error);
        res.status(500).send('Internal Server Error');
      }
    });