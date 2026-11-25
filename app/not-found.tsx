
import Link from "next/link";
import { Scale, BookOpen, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "#f7f5f0",
      color: "#142541",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "24px",
    }}>
      <div style={{ maxWidth: "650px" }}>

        <Scale size={76} color="#c7a36b" strokeWidth={1.3} />

        <p style={{
          letterSpacing: "4px",
          color: "#c7a36b",
          fontWeight: "bold",
          marginTop: "25px",
        }}>
          JUSTICE IS NEVER LOST
        </p>

        <h1 style={{
          fontSize: "110px",
          margin: "10px 0",
          color: "#142541",
          lineHeight: 1,
        }}>
          404
        </h1>

        <h2 style={{ fontSize: "28px" }}>
          Objection! Page Not Found.
        </h2>

        <p style={{
          color: "#687386",
          lineHeight: 1.8,
          margin: "20px 0",
        }}>
          The page you are looking for may have been moved,
          removed, or does not exist. Let us help you find
          your way back to learning.
        </p>

        <Link href="/" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "10px",
          background: "#142541",
          color: "#ffffff",
          padding: "14px 26px",
          borderRadius: "6px",
          textDecoration: "none",
          fontWeight: "bold",
        }}>
          <ArrowLeft size={18} />
          Return to Home
        </Link>

        <div style={{
          marginTop: "55px",
          borderTop: "1px solid #e8e8e5",
          paddingTop: "20px",
          color: "#687386",
          fontSize: "13px",
        }}>
          <BookOpen size={20} color="#c7a36b" />
          <p>Vignan Reddy Legal Journey</p>
          <p>Learn Law. Share Knowledge. Grow Together.</p>
        </div>

      </div>
    </main>
  );
}
