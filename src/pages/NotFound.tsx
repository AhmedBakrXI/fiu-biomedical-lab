import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ChevronLeft, FlaskConical } from 'lucide-react';
import { Button } from '../components/ui/button';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated Icon Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative inline-block"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-600 rounded-full blur opacity-25 animate-pulse"></div>
          <div className="relative bg-white p-6 rounded-full shadow-xl border border-slate-100">
            <FlaskConical className="w-16 h-16 text-primary" />
          </div>
        </motion.div>

        {/* Big 404 Text */}
        <motion.h1 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
          className="mt-8 text-9xl font-extrabold text-slate-900 tracking-tighter"
        >
          404
        </motion.h1>

        <div className="mt-4 space-y-2">
          <h2 className="text-3xl font-bold text-slate-800 tracking-tight">
            Experiment Lost in Space
          </h2>
          <p className="text-slate-500 max-w-md mx-auto text-lg">
            The page you're looking for has moved to another dimension or never existed in this lab.
          </p>
        </div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => navigate(-1)}
            className="group flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Go Back
          </button>

          <Button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            Return Home
          </Button>
        </motion.div>

        {/* Subtle Decorative Elements */}
        <div className="mt-20 opacity-20 flex justify-center gap-8">
          <div className="h-1 w-20 bg-slate-300 rounded-full"></div>
          <div className="h-1 w-1 bg-slate-300 rounded-full"></div>
          <div className="h-1 w-20 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
