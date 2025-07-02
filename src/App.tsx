import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<About />
			<Experience />
			<Skills />
			<Projects />
			<Education />
			<Contact />

			{/* Footer */}
			<footer className="bg-gradient-to-r from-slate-900 to-gray-900 text-white py-12">
				<div className="max-w-7xl mx-auto px-6">
					<div className="flex flex-col md:flex-row justify-between items-center">
						<div className="mb-4 md:mb-0">
							<p className="text-gray-300 text-lg">© 2025 Alex Chen. Crafted with React, TypeScript, and Tailwind CSS.</p>
						</div>
						<div className="flex space-x-6">
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								Privacy Policy
							</a>
							<a href="#" className="text-gray-400 hover:text-white transition-colors">
								Terms of Service
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
