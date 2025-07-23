import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar,
} from 'recharts';

const rankScoreData = [
  { name: 'Jan', score: 400 },
  { name: 'Feb', score: 300 },
  { name: 'Mar', score: 500 },
  { name: 'Apr', score: 200 },
  { name: 'May', score: 278 },
  { name: 'Jun', score: 189 },
];

const analyticsData = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

const speedData = [
  { name: 'Speed', value: 75 },
];

const seoScore = 78; // Example SEO score percentage

const seoSuggestions = [
  "Improve meta descriptions",
  "Add alt text to images",
  "Increase page load speed",
  "Use descriptive URLs",
  "Add structured data markup",
];

const userActivityLogs = [
  "User John Doe logged in",
  "User Jane Smith updated profile",
  "New booking created by User Mike",
  "System backup completed",
  "User Anna Lee logged out",
  "New comment added on blog post",
];

const notifications = [
  "Server CPU usage is high",
  "New user registration pending approval",
  "Payment gateway error reported",
  "Scheduled maintenance on Sunday",
];

const trafficSourcesData = [
  { name: 'Direct', value: 400 },
  { name: 'Referral', value: 300 },
  { name: 'Social', value: 200 },
  { name: 'Organic', value: 278 },
  { name: 'Email', value: 189 },
];

const Dashboard: React.FC = () => {
  return (
    <>
      <div style={{ padding: '20px', fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", backgroundColor: '#f4f6f8', minHeight: '100vh' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#34495e' }}>Dashboard</h1>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
          <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Rank Score</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={rankScoreData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
                <XAxis dataKey="name" stroke="#7f8c8d" />
                <YAxis stroke="#7f8c8d" />
                <Tooltip contentStyle={{ backgroundColor: '#34495e', borderRadius: '8px', color: '#ecf0f1' }} />
                <Legend wrapperStyle={{ color: '#34495e' }} />
                <Line type="monotone" dataKey="score" stroke="#2980b9" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </section>

          <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Analytics</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={analyticsData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
                <XAxis dataKey="name" stroke="#7f8c8d" />
                <YAxis stroke="#7f8c8d" />
                <Tooltip contentStyle={{ backgroundColor: '#34495e', borderRadius: '8px', color: '#ecf0f1' }} />
                <Legend wrapperStyle={{ color: '#34495e' }} />
                <Bar dataKey="uv" fill="#27ae60" />
                <Bar dataKey="pv" fill="#2980b9" />
              </BarChart>
            </ResponsiveContainer>
          </section>

          <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '15px', color: '#2c3e50' }}>Speed Metrics</h2>
            <p style={{ fontSize: '24px', fontWeight: 'bold', color: '#27ae60' }}>Current speed: 75%</p>
          </section>

          <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>SEO Score Meter</h2>
            <div style={{ background: '#ecf0f1', borderRadius: '8px', width: '100%', height: '30px', overflow: 'hidden' }}>
              <div style={{
                width: seoScore + '%',
                height: '100%',
                backgroundColor: seoScore > 80 ? '#27ae60' : seoScore > 50 ? '#f39c12' : '#c0392b',
                transition: 'width 0.5s ease-in-out'
              }}></div>
            </div>
            <p style={{ marginTop: '10px', fontWeight: '600', color: '#2c3e50' }}>{seoScore}% SEO Score</p>
          </section>

          <section style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
            <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>SEO Suggestions</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', color: '#34495e' }}>
              {seoSuggestions.map((suggestion, index) => (
                <li key={index} style={{ marginBottom: '8px', fontSize: '16px' }}>{suggestion}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section style={{ marginTop: '40px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>User Activity Logs</h2>
        <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '20px', color: '#34495e' }}>
          {userActivityLogs.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '40px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Notifications & Alerts</h2>
        <ul style={{ maxHeight: '150px', overflowY: 'auto', paddingLeft: '20px', color: '#c0392b' }}>
          {notifications.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: '40px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Traffic Sources</h2>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={trafficSourcesData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#ecf0f1" />
            <XAxis dataKey="name" stroke="#7f8c8d" />
            <YAxis stroke="#7f8c8d" />
            <Tooltip contentStyle={{ backgroundColor: '#34495e', borderRadius: '8px', color: '#ecf0f1' }} />
            <Bar dataKey="value" fill="#2980b9" />
          </BarChart>
        </ResponsiveContainer>
      </section>

      <section style={{ marginTop: '40px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
        <h2 style={{ marginBottom: '20px', color: '#2c3e50' }}>Widget Customization</h2>
        <form>
          <label style={{ display: 'block', marginBottom: '10px', color: '#34495e' }}>
            <input type="checkbox" defaultChecked /> Show Rank Score
          </label>
          <label style={{ display: 'block', marginBottom: '10px', color: '#34495e' }}>
            <input type="checkbox" defaultChecked /> Show Analytics
          </label>
          <label style={{ display: 'block', marginBottom: '10px', color: '#34495e' }}>
            <input type="checkbox" defaultChecked /> Show Speed Metrics
          </label>
          <label style={{ display: 'block', marginBottom: '10px', color: '#34495e' }}>
            <input type="checkbox" defaultChecked /> Show SEO Score Meter
          </label>
          <label style={{ display: 'block', marginBottom: '10px', color: '#34495e' }}>
            <input type="checkbox" defaultChecked /> Show SEO Suggestions
          </label>
          <label style={{ display: 'block', marginBottom: '10px', color: '#34495e' }}>
            <input type="checkbox" defaultChecked /> Show User Activity Logs
          </label>
          <label style={{ display: 'block', marginBottom: '10px', color: '#34495e' }}>
            <input type="checkbox" defaultChecked /> Show Notifications & Alerts
          </label>
          <label style={{ display: 'block', marginBottom: '10px', color: '#34495e' }}>
            <input type="checkbox" defaultChecked /> Show Traffic Sources
          </label>
        </form>
      </section>
    </>
  );
};

export default Dashboard;
