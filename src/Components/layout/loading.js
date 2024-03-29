import styles from "./loading-screen.module.scss";

function SpinnerIcon() {
    return (
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
        <g>
          <path d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .918 }} transform="rotate(330,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .836 }} transform="rotate(300,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .755 }} transform="rotate(270,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .673 }} transform="rotate(240,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .591 }} transform="rotate(210,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .509 }} transform="rotate(180,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .427 }} transform="rotate(150,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .345 }} transform="rotate(120,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .264 }} transform="rotate(90,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .182 }} transform="rotate(60,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <path style={{ opacity: .1 }} transform="rotate(30,12,12)" d="M12,2 a1,1 0 0 1 1,1 v3 a1,1 0 0 1 -1,1 a1,1 0 0 1 -1,-1 v-3 a1,1 0 0 1 1,-1 z" />
          <animateTransform attributeType="xml"
            attributeName="transform"
            type="rotate"
            dur="1s"
            repeatCount="indefinite"
            calcMode="discrete"
            values="0 12 12; 30 12 12; 60 12 12; 90 12 12; 120 12 12; 150 12 12; 180 12 12; 210 12 12; 240 12 12; 270 12 12; 300 12 12; 330 12 12" />
        </g>
      </svg>
    )
  }
  

export default function LoadingScreen() {
  return (
    <div className={styles["loading-screen"]}>
      <div className={styles["content"]}>
        <SpinnerIcon />
        <div className={styles["text"]}>wait a sec...</div>
      </div>
    </div>
  );
}