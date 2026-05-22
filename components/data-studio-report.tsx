'use client';

interface ReportEmbedProps {
  reportUrl: string;
  /** Must match the report canvas height at the embed width (see Looker Studio → Embed report). */
  height?: number;
}

export default function ReportEmbed({ reportUrl, height = 3123 }: ReportEmbedProps) {
  return (
    <div className="report-wrapper">
      <div className="report-container" style={{ height }}>
        <iframe
          src={reportUrl}
          title="School District Report"
          className="report-iframe"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>

      <style jsx>{`
        /* Centers the 1000px dashboard on the page */
        .report-wrapper {
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .report-wrapper,
        .report-container {
          color-scheme: dark;
        }

        .report-container {
          position: relative;
          width: 100%;
          max-width: 1200px;
          overflow: hidden;
          background-color: #121212; /* Clean dark mode loading canvas */
        }

        .report-iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: none;
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
}
