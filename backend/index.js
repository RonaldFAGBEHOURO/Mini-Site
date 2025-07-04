const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
app.use(cors());
app.use(express.json());

// Route d'inscription
app.post('/register', async (req, res) => {
  const { nom, email } = req.body;

  if (!nom || !email) {
    return res.status(400).json({ error: 'Nom et email requis' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ error: 'Email déjà utilisé' });
    }

    const newUser = await prisma.user.create({ data: { nom, email } });
    res.json(newUser);
  } catch (err) {
    console.error(err); // Affiche l'erreur dans la console
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


// Route de connexion
app.post('/login', async (req, res) => {
  const { nom, email } = req.body;  // ← récupérer aussi nom

  try {
    const user = await prisma.user.findFirst({
      where: {
        nom: {
          equals: nom
        },
        email: {
          equals: email
        }
      },
    });

    if (!user) {
      return res.status(400).json({ error: 'Utilisateur introuvable ou informations incorrectes' });
    }

    res.json(user);
  } catch (err) {
    console.error(err); // pour aider au debug
    res.status(500).json({ error: 'Erreur serveur' });
  }
});


// ✅ Route pour afficher tous les utilisateurs
app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Erreur lors de la récupération des utilisateurs' });
  }
});

app.listen(3001, () => {
  console.log('Serveur backend lancé sur http://localhost:3001');
});
