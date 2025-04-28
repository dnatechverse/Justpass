const { Enrollment } = require('./../../models');

exports.postEnrollment = async (req, res) => {
    try {
        const { name, email, phone, course } = req.body;
        const exist = await Enrollment.findOne({ email });
        if (exist) {
            return res.status(409).json({ message: 'User Already Applied' });
        } else {
            const enrollment = await Enrollment.create({ name, email, phone, course });
            res.status(201).json({ message: 'Enrollment request submitted successfully', enrollment });
        }
    }
    catch (error) {
        console.error('Error in postEnrollment:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.getEnrollment = async (req, res) => {
    try {
        const enrollments = await Enrollment.find({});
        res.status(200).json(enrollments);
    } catch (error) {
        console.error('Error in getEnrollment:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.deleteEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        const enrollment = await Enrollment.findByIdAndDelete(id);
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.status(200).json({ message: 'Enrollment deleted successfully', enrollment }); 
    } catch (error) {
        console.error('Error in deleteEnrollment:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.updateEnrollment = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, phone, course } = req.body;
        const enrollment = await Enrollment.findByIdAndUpdate(id, { name, email, phone, course }, { new: true });
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.status(200).json({ message: 'Enrollment updated successfully', enrollment });
    } catch (error) {
        console.error('Error in updateEnrollment:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}

exports.getEnrollmentByEmail = async (req, res) => {
    try {
        const { email } = req.params;
        const enrollment = await Enrollment.find({ email });
        if (!enrollment) {
            return res.status(404).json({ message: 'Enrollment not found' });
        }
        res.status(200).json(enrollment);
    } catch (error) {
        console.error('Error in getEnrollmentByEmail:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
}