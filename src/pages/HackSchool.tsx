function HackSchool () {
  const tableStyles = {
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginBottom: '40px',
    },
    th: {
      borderBottom: '2px solid #ddd',
      padding: '10px',
      textAlign: 'center',
    },
    td: {
      padding: '10px',
      borderBottom: '1px solid #ddd',
    },
    link: {
      color: '#d742f5',
      fontWeight: 'bold',
    },
  };

  const sessions = [
    { session: 'Session 1', topic: 'Introduction to HTML, CSS, and Basic React with Vite', resources: 'https://example.com/readme1|https://example.com/slides1' },
    { session: 'Session 2', topic: 'TypeScript, GitHub, and Deployment with Vercel', resources: 'https://example.com/readme2|https://example.com/slides2' },
    { session: 'Session 3', topic: 'Introduction to React (Components and Props)', resources: 'https://example.com/readme3|https://example.com/slides3' },
    { session: 'Session 4', topic: 'React Events and State Management', resources: 'https://example.com/readme4|https://example.com/slides4' },
    { session: 'Session 5', topic: 'Navigation in React Applications', resources: 'https://example.com/readme5|https://example.com/slides5' },
    { session: 'Session 6', topic: 'Advanced Topics (Tailwind CSS, Linters, VSCode Settings)', resources: 'https://example.com/readme6|https://example.com/slides6' },
    { session: 'Session 7', topic: 'Project Showcase', resources: 'https://example.com/readme7|https://example.com/slides7' },
  ];

  const renderResourceLinks = (resources) => {
    const [readme, slides] = resources.split('|');
    return (
      <>
        <a href={readme} style={tableStyles.link}>README</a> ·{' '}
        <a href={slides} style={tableStyles.link}>Slides</a>
      </>
    );
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, margin: '20px' }}>

      <h1 className="text-4xl font-bold" style={{ color: '#d742f5', marginTop: '40px', marginBottom: '40px' }}>HackSchool Curriculum</h1>
      
      <p style={{ fontSize: '1.1em', marginBottom: '30px', textAlign: 'center' }}>
        <strong>Brrrringgggg! HackSchool is now in session!</strong> Throughout the quarter, our beginner-friendly, flagship web development workshop series will help you learn and utilize skills such as HTML, CSS, and React.JS to build your very own website! All are welcome to learn, build, code, and eat with us, so pencil HackSchool into your schedule! We’ll see you there!
      </p>
  
      <table style={tableStyles.table}>
        <thead>
          <tr>
            <th style={tableStyles.th}>Session</th>
            <th style={tableStyles.th}>Topic</th>
            <th style={tableStyles.th}>Resources</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map(({ session, topic, resources }, index) => (
            <tr key={index}>
              <td style={tableStyles.td}>{session}</td>
              <td style={tableStyles.td}>{topic}</td>
              <td style={tableStyles.td}>{renderResourceLinks(resources)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
}

export default HackSchool;

