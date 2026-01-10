import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { LogOut, Plus, FileText } from 'lucide-react';
import './Admin.css';

const Dashboard = () => {
    const { logout, currentUser } = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/admin/login');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    return (
        <div className="page-container">
            <div className="container">
                <div className="dashboard-header">
                    <div>
                        <h1>Admin Dashboard</h1>
                        <p className="text-secondary">Welcome, {currentUser?.email}</p>
                    </div>
                    <div className="dashboard-actions">
                        <button className="action-btn btn-secondary" onClick={handleLogout}>
                            <LogOut size={18} /> Logout
                        </button>
                    </div>
                </div>

                <div className="dashboard-grid">
                    <div className="content-section">
                        <div className="section-title-bar" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <h2>Manage Blogs</h2>
                            <button className="action-btn" style={{ width: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Plus size={18} /> New Post
                            </button>
                        </div>

                        <div className="content-list">
                            <div className="list-item">
                                <div className="item-info">
                                    <h3>Mastering React Hooks</h3>
                                    <span className="status">Published • Oct 12, 2023</span>
                                </div>
                                <div className="item-actions">
                                    <button className="icon-btn" title="Edit"><FileText size={18} /></button>
                                </div>
                            </div>
                            {/* More items would be mapped here from Firestore */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
