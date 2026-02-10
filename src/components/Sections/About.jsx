import { SectionLabel } from './SectionLabel'

export const AboutSection = () => (
  <section id="about" className="container mx-auto px-4 pb-20 space-y-6">
    <SectionLabel>About</SectionLabel>
    <div className="card bg-base-100 shadow-xl border border-base-200">
      <div className="card-body grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-4">
          <h2 className="card-title text-3xl">Security Researcher and Tech Enthusiast</h2>
          
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { 
    title: 'Threat Detection', 
    desc: 'I build systems that catch bad actors early, turning raw data into high-fidelity alerts that analysts actually trust.' 
  },
  { 
    title: 'Security Automation', 
    desc: 'I hate manual tasks. I use Python and Terraform to automate the boring stuff so teams can focus on real security.' 
  },
  { 
    title: 'Cloud Security', 
    desc: 'Securing modern infrastructure (AWS, K8s) from the ground up, ensuring speed doesn’t compromise safety.' 
  },
  { 
    title: 'People & Strategy', 
    desc: 'Translating technical risk into business language and building teams where people feel supported, not burned out.' 
  },
            ].map((item) => (
              <div key={item.title} className="p-4 rounded-xl bg-base-200">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-base-content/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

<div className="bg-base-200 rounded-2xl p-6 space-y-6">
  <h3 className="text-xl font-semibold">Skills and Technologies</h3>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    {/* Group 1: The "Core" - Detection & Response */}
    <div className="space-y-2">
      <h4 className="text-sm font-bold opacity-70 uppercase tracking-wider">SecOps & SIEM</h4>
      <div className="flex flex-wrap gap-2">
        {['XSIAM', 'Splunk', 'ELK Stack', 'Phantom','XSOAR', 'CrowdStrike', 'XDR'].map(tool => (
          <span key={tool} className="badge  badge-outline">{tool}</span>
        ))}
      </div>
    </div>

    {/* Group 2: Threat Intel */}
    <div className="space-y-2">
      <h4 className="text-sm font-bold opacity-70 uppercase tracking-wider">Threat Intel & Research</h4>
      <div className="flex flex-wrap gap-2">
        {['MITRE ATT&CK', 'TTP Analysis', 'YARA', 'STIX/TAXII', 'Threat Hunting'].map(tool => (
          <span key={tool} className="badge badge-outline">{tool}</span>
        ))}
      </div>
    </div>

    {/* Group 3: The "Builder" - Cloud & Infrastructure */}
    <div className="space-y-2">
      <h4 className="text-sm font-bold opacity-70 uppercase tracking-wider">Cloud & DevSecOps</h4>
      <div className="flex flex-wrap gap-2">
        {['AWS', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'Ansible', 'GitHub Actions'].map(tool => (
          <span key={tool} className="badge  badge-outline">{tool}</span>
        ))}
      </div>
    </div>

    {/* Group 4:  Languages */}
    <div className="space-y-2">
      <h4 className="text-sm font-bold opacity-70 uppercase tracking-wider">Languages & Scripting</h4>
      <div className="flex flex-wrap gap-2">
        {['Python', 'JavaScript', 'PowerShell', 'Bash', 'SQL', 'SPL', 'EQL', 'XQL'].map(tool => (
          <span key={tool} className="badge badge-outline">{tool}</span>
        ))}
      </div>
    </div>

    {/* Group 5: The "Manager" - GRC */}
    <div className="space-y-2">
      <h4 className="text-sm font-bold opacity-70 uppercase tracking-wider">Governance & Risk</h4>
      <div className="flex flex-wrap gap-2">
        {['NIST', 'ISO 27001', 'SOC', 'CMMC', 'HIPAA'].map(tool => (
          <span key={tool} className="badge badge-outline">{tool}</span>
        ))}
      </div>
    </div>

  </div>
</div>
      </div>
    </div>
  </section>
)
