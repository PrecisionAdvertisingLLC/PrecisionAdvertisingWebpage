// src/components/MainContent.tsx

export default function MainContent() {
  return (
    <section className="main-content video-section">
      <video
        src="/temporary.mp4"
        controls
        className="static-video"
      />
      <div className="video-description">
        <p>
          Over half of today’s web interactions come from phantom traffic—automated scripts, 
	  abandoned or hijacked accounts, and AI-driven crawlers posing as users. As a result,
	  more than 50% of ad impressions land on these non-human actors, inflating engagement 
          metrics and burying real audiences. Our goal is to craft hyper-targeted campaigns
          that turn clicks into a loyal customers. We combine data-driven insights
          with creative storytelling to maximize ROI for brands of all sizes.
        </p>
      </div>
    </section>
  )
}