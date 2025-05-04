//PROJECT STRUCTURE//
project-management-tool/
│
├── client/              # React app
│   ├── src/
│   └── public/
│
├── server/              # Node.js backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
│   └── .env
//BACKEND SERVER.JS//
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.get('/', (req, res) => res.send('API Running'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//USER.JS//
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
module.exports = mongoose.model('User', UserSchema);
//PROJECT TASK//
// models/Project.js
const mongoose = require('mongoose');
const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  createdBy: String,
});
module.exports = mongoose.model('Project', ProjectSchema);

// models/Task.js
const TaskSchema = new mongoose.Schema({
  projectId: String,
  title: String,
  assignedTo: String,
  status: String, // "To-do", "In Progress", "Done"
  deadline: Date,
});
module.exports = mongoose.model('Task', TaskSchema);
//FRONTEND//
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
export default App;
