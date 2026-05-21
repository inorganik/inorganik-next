'use client';

interface ReportEmbedProps {
  reportUrl: string;
}

export default function ReportEmbed({ reportUrl }: ReportEmbedProps) {
  return (
    <div className="report-wrapper">
      <div className="report-container">
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
          
          height: 2084px; 
          
          overflow: hidden;
          background-color: #121212; /* Clean dark mode loading canvas */
          scrollbar-color: #646464 #1c1c1c;
          scrollbar-width: thin;
        }

        .report-container::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }

        .report-container::-webkit-scrollbar-track {
          background: #1c1c1c;
        }

        .report-container::-webkit-scrollbar-thumb {
          background: #646464;
          border-radius: 4px;
        }

        /* Forces the iframe to strictly inherit and fill the container geometry */
        .report-iframe {
          width: 100%;
          height: 100%;
          border: none;
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
}