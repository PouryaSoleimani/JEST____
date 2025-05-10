"use client";
import React  from "react";
import { useState } from "react";

export default function Home() {
	const [password, setPassword] = useState('')
	function loginHandler(password: string) {
		// Simulate a login check
		console.log('Attempting to log in with password:', password)
		if (password === '1234') {
			alert('Login successful!')
		} else {
			alert('Incorrect password. Please try again.')
		}
	}

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-zinc-950">
			<h1 className="bg-orange-600 w-full text-3xl font-bold text-center py-6 text-white rounded-xl shadow-lg">JEST TRAINING COURSE</h1>
			{/* <Article /> */}
			<form
				onSubmit={e => {
					e.preventDefault()
					loginHandler(password)
				}}
				className="flex flex-col items-center gap-4 bg-black p-6 rounded shadow-md w-full max-w-md">
				<input
					type="text"
					placeholder="Username"
					className="w-full p-2 border bg-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
				/>
				<input
					type="password"
					placeholder="Enter password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-600"
				/>
				<button type="submit" className="w-full bg-orange-600 text-white py-2 rounded hover:bg-orange-700 transition">
					Login
				</button>
			</form>
			<p className="text-center text-gray-500">
				Forgot your password?{' '}
				<a href="#" className="text-blue-500 hover:underline">
					Reset it here
				</a>
				.
			</p>
			<p className="text-center text-gray-500">
				New user?{' '}
				<a href="#" className="text-blue-500 hover:underline">
					Sign up here
				</a>
				.
			</p>
		</div>
	)
}
