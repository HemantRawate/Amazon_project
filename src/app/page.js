import Image from "next/image";
import styles from "./page.module.css";
import { UserButton } from "@clerk/nextjs";
import "./home.css";

export default function Home() {
  return (
    <div className="container">
    {/* User Button at Top Right */}
    <div className="user-button">
      <UserButton />
    </div>

    {/* Header Section */}
    <h1 className="title">Amazon Project</h1>

    {/* Feature Section */}
    <div className="features">
      <div className="feature-card">
        <h2>Real-time Sales Data</h2>
        <p>Monitor and analyze sales performance with dynamic data visualization.</p>
      </div>
      <div className="feature-card">
        <h2>Product Management</h2>
        <p>Easily add, update, and manage your Amazon product listings.</p>
      </div>
    </div>
  </div>
  );
}
