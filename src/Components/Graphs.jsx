import React from 'react';
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { motion } from "framer-motion";

const Graphs = ({ data }) => {
  // Process data for cylinder status distribution
  const statusData = data.reduce((acc, item) => {
    const status = item.cylinderStatus;
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {});

  const pieData = Object.entries(statusData).map(([name, value]) => ({
    name,
    value
  }));

  // Process data for weight variations over time
  const weightData = data.map(item => ({
    date: item.createdAt,
    variation: parseFloat(item.variation),
    weight: parseFloat(item.netWeight)
  }));

  // Process data for leak distribution
  const leakData = data.reduce((acc, item) => {
    if (item.valueLeak === 'YES') acc.valueLeak++;
    if (item.oringLeak === 'YES') acc.oringLeak++;
    if (item.seal === 'DAMAGED') acc.sealDamage++;
    if (item.bungStatus === 'DAMAGED') acc.bungDamage++;
    return acc;
  }, { valueLeak: 0, oringLeak: 0, sealDamage: 0, bungDamage: 0 });

  const leakBarData = [
    { name: 'Valve Leak', value: leakData.valueLeak },
    { name: 'O-Ring Leak', value: leakData.oringLeak },
    { name: 'Seal Damage', value: leakData.sealDamage },
    { name: 'Bung Damage', value: leakData.bungDamage }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <Container maxWidth="xl">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            mb: 4,
            fontWeight: 'bold',
            color: '#0056b3',
            textAlign: 'center'
          }}
        >
          Cylinder Quality Analytics
        </Typography>

        <Grid container spacing={4}>
          {/* Cylinder Status Distribution */}
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              elevation={3}
              sx={{ p: 3, borderRadius: 2 }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>Cylinder Status Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Weight Variations Over Time */}
          <Grid item xs={12} md={6}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              elevation={3}
              sx={{ p: 3, borderRadius: 2 }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>Weight Variations Over Time</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="variation" stroke="#8884d8" name="Variation" />
                  <Line type="monotone" dataKey="weight" stroke="#82ca9d" name="Net Weight" />
                </LineChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>

          {/* Leak and Damage Distribution */}
          <Grid item xs={12}>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              elevation={3}
              sx={{ p: 3, borderRadius: 2 }}
            >
              <Typography variant="h6" sx={{ mb: 2 }}>Leak and Damage Distribution</Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={leakBarData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8">
                    {leakBarData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Graphs;