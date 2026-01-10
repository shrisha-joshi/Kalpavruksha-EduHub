/**
 * MongoDB Connection Test Script - Web App
 * Run this to verify your MongoDB connection is working
 * 
 * Usage:
 *   node test-mongodb.js
 * 
 * Or with npm:
 *   npm run test:db
 */

const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Read .env.local file manually
function loadEnv() {
  const envPath = path.join(__dirname, '.env.local');
  
  if (!fs.existsSync(envPath)) {
    return null;
  }
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const [key, ...valueParts] = trimmed.split('=');
      if (key === 'MONGODB_URI') {
        return valueParts.join('=').trim();
      }
    }
  }
  
  return null;
}

const MONGODB_URI = loadEnv();

async function testConnection() {
  console.log('🔍 Testing MongoDB connection (Web App)...\n');
  
  if (!MONGODB_URI) {
    console.error('❌ ERROR: MONGODB_URI not found in .env.local');
    console.log('\n📝 Create .env.local file with:');
    console.log('MONGODB_URI=mongodb://localhost:27017/kalpavruksha');
    console.log('\nOr for MongoDB Atlas:');
    console.log('MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kalpavruksha');
    process.exit(1);
  }

  console.log(`📡 Connecting to: ${MONGODB_URI.replace(/\/\/.*:.*@/, '//***:***@')}\n`);

  try {
    await mongoose.connect(MONGODB_URI);
    console.log('✅ MongoDB Connected Successfully!\n');

    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    
    console.log('📊 Database Statistics:');
    console.log(`   Database Name: ${db.databaseName}`);
    console.log(`   Collections: ${collections.length}`);
    
    // Check for resources collection
    const resourcesCollection = collections.find(c => c.name === 'resources');
    if (resourcesCollection) {
      const count = await db.collection('resources').countDocuments();
      console.log(`   Resources: ${count} documents found ✅`);
      
      if (count === 0) {
        console.log('\n⚠️  No resources found. Upload some from admin app first!');
      } else if (count > 0) {
        console.log(`\n   ✨ Great! Web app can access all ${count} resources.`);
      }
    } else {
      console.log(`   ⚠️  Resources collection not found. Upload resources from admin app.`);
    }

    // Check classes
    const classesCollection = collections.find(c => c.name === 'classes');
    if (classesCollection) {
      const classCount = await db.collection('classes').countDocuments();
      console.log(`   Classes: ${classCount} documents found`);
    }

    console.log('\n✨ Web app can fetch unlimited resources from MongoDB!\n');
    
    await mongoose.disconnect();
    console.log('👋 Disconnected from MongoDB');
    process.exit(0);
    
  } catch (error) {
    console.error('\n❌ MongoDB Connection Failed!');
    console.error('Error:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Make sure MongoDB is running');
    console.log('2. Check your MONGODB_URI in .env.local');
    console.log('3. Verify it matches the admin app MONGODB_URI');
    console.log('4. Restart the web app after updating .env.local\n');
    process.exit(1);
  }
}

testConnection();
