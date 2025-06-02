import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Github, Mail } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';
import favicon from '../../assets/images/favicon.svg';
import imgme from '../../assets/images/imgme.jpg';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#E5E5E7] dark:bg-[#313D45]">
      <motion.div 
        className="absolute inset-0 z-0 opacity-30 dark:opacity-10"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-[#BA68C8]/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-[#BA68C8]/20 blur-3xl"></div>
      </motion.div>

      <div className="container-custom relative z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.span 
              variants={itemVariants}
              className="inline-block py-1 px-3 rounded-full bg-[#BA68C8]/10 text-[#BA68C8] text-sm font-medium mb-4"
            >
              Frontend Developer
            </motion.span>
            <motion.h1 
              variants={itemVariants}
              className="mb-4 flex items-center gap-2 text-3xl md:text-4xl font-bold text-[#BA68C8]"
            >
              <Typewriter
                words={["Hi! I'm samar khaled."]}
                loop={0} // 0 = infinite loop
                cursor
                cursorStyle="|"
                typeSpeed={180}
                deleteSpeed={60}
                delaySpeed={2000}
              />
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl mb-8 leading-relaxed"
            >
              
A creative Frontend Developer with proven experience in building high-performance, scalable, and responsive web solutions.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="btn-primary">
                Get in Touch <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/projects" className="btn-outline">
                View Projects
              </Link>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="mt-12 flex items-center gap-6"
            >
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#BA68C8] hover:text-[#AB47BC] transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#BA68C8] hover:text-[#AB47BC] transition-colors"
              >
                {/* LinkedIn icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z"/></svg>
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://wa.me/201032068211" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#BA68C8] hover:text-[#AB47BC] transition-colors"
              >
                {/* WhatsApp icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.004a9.87 9.87 0 01-4.219-1.014l-.304-.144-3.143.822.842-3.066-.198-.314a9.86 9.86 0 01-1.51-5.26c.001-5.444 4.434-9.877 9.88-9.877 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.979c-.003 5.444-4.436 9.877-9.88 9.877zm8.413-18.289A11.815 11.815 0 0012.05 0C5.495 0 .06 5.435.058 12.09c0 2.137.56 4.223 1.623 6.067L.057 24l5.995-1.572a11.888 11.888 0 005.96 1.523h.005c6.554 0 11.989-5.435 11.991-12.09a11.92 11.92 0 00-3.518-8.74z"/></svg>
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants}
            className="relative"
          >
            {/* Animated blurred background effect behind the profile image */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center -z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="absolute w-72 h-72 bg-[#BA68C8]/30 blur-3xl rounded-full animate-pulse"
                style={{ filter: 'blur(60px)' }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute w-56 h-56 bg-[#AB47BC]/30 blur-2xl rounded-full animate-pulse"
                style={{ filter: 'blur(40px)' }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                  delay: 1.5,
                }}
              />
            </motion.div>
            <motion.div 
              className="relative bg-[#E5E5E7] dark:bg-[#313D45] rounded-2xl p-4 shadow-xl"
              whileHover={{ rotate: 0, scale: 1.02 }}
              initial={{ rotate: 3 }}
              animate={{
                rotate: [3, -3, 3],
                y: [0, -10, 0, 10, 0],
                x: [0, 10, 0, -10, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <motion.img 
                  src={imgme} 
                  alt="Samar Khaled" 
                  className="w-full h-[48rem] max-h-[52rem] object-cover object-bottom rounded-lg"
                  animate={{
                    scale: [1, 1.03, 1],
                    rotate: [0, 1, -1, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                  }}
                />
              </div>
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-[#E5E5E7] dark:bg-[#313D45] py-2 px-4 rounded-lg shadow-lg font-mono text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="text-[#BA68C8]">frontend</span>
                <span className="text-[#BA68C8]">()</span>
                <span className="text-[#BA68C8]"> = </span>
                <span className="text-[#BA68C8]">passion;</span>
              </motion.div>
            </motion.div>

            <motion.div 
              className="absolute -z-10 -top-4 -left-4 w-full h-full bg-[#BA68C8]/20 rounded-2xl"
              initial={{ rotate: 6, opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div 
              className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-[#BA68C8]/20 rounded-2xl"
              initial={{ rotate: -6, opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <span className="text-[#BA68C8] text-sm mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-[#BA68C8] rounded-full flex justify-center">
            <motion.div 
              className="w-1.5 h-3 bg-[#BA68C8] rounded-full mt-2"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;