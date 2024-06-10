import express from "express";
import authRoutes from './routes/authRoutes';
import shiftRoutes from './routes/shiftRoutes';
import timesheetRoutes from './routes/timesheetRoutes';
import reportRoutes from './routes/reportRoutes';

const app =express();

const PORT =process.env.PORT||3000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/shifts', shiftRoutes);
app.use('/api/timesheets', timesheetRoutes);
app.use('/api/reports', reportRoutes);


app.listen(PORT,()=>{
    console.log(`server running on port${PORT}`);
})