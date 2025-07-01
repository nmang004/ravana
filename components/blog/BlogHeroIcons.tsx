'use client';

import { motion } from 'framer-motion';
import { DollarSign, AlertTriangle, Lock, TrendingDown, Calculator, FileQuestion } from 'lucide-react';

export function PricingAnalysisHero() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-red-900/20 via-background to-orange-900/20 flex items-center justify-center p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        <motion.div
          className="mb-8"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative inline-flex">
            <DollarSign className="w-32 h-32 text-red-500" />
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <AlertTriangle className="w-16 h-16 text-orange-500" />
            </motion.div>
          </div>
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
          Hidden Costs Revealed
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Uncovering the true price of restaurant marketing platforms
        </p>

        {/* Icon Grid */}
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Lock className="w-8 h-8 text-red-500 mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Binding Contracts</p>
          </motion.div>
          
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <TrendingDown className="w-8 h-8 text-orange-500 mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">SEO Impact</p>
          </motion.div>
          
          <motion.div
            className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FileQuestion className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <p className="text-xs text-muted-foreground">Asset Ownership</p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-10"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        <Calculator className="w-12 h-12 text-red-500/20" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-10 right-10"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        <DollarSign className="w-16 h-16 text-orange-500/20" />
      </motion.div>
    </div>
  );
}

export function ComparisonHero() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-accent/20 via-background to-blue-900/20 flex items-center justify-center p-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 20px)`
        }} />
      </div>

      {/* VS Battle Layout */}
      <div className="relative z-10 w-full max-w-4xl">
        <div className="grid grid-cols-3 gap-8 items-center">
          {/* Ravana Side */}
          <motion.div
            className="text-center"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-accent/10 border-2 border-accent rounded-xl p-6 mb-4">
              <h2 className="text-3xl font-heading font-bold text-accent mb-2">Ravana</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-muted-foreground">Transparent</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-muted-foreground">Flexible</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-muted-foreground">You Own It</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* VS Center */}
          <motion.div
            className="text-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="text-6xl font-bold text-foreground"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                VS
              </motion.div>
              <motion.div
                className="absolute inset-0 blur-3xl bg-accent/20"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            </div>
          </motion.div>

          {/* Spothopper Side */}
          <motion.div
            className="text-center"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-red-500/10 border-2 border-red-500 rounded-xl p-6 mb-4">
              <h2 className="text-3xl font-heading font-bold text-red-500 mb-2">Spothopper</h2>
              <div className="space-y-2">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-muted-foreground">Hidden Fees</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-muted-foreground">Locked In</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-muted-foreground">They Own It</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Choose Your Marketing Partner Wisely
          </h1>
          <p className="text-lg text-muted-foreground">
            A detailed comparison for restaurant owners
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-20 left-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        <div className="w-4 h-4 bg-accent rounded-full" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 3, delay: 1 }}
      >
        <div className="w-4 h-4 bg-red-500 rounded-full" />
      </motion.div>
    </div>
  );
}