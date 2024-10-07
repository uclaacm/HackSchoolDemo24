function HackSchool() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: 1.6, margin: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>HackSchool Curriculum</h1>

      <p style={{ fontSize: '1.1em', marginBottom: '30px', textAlign: 'center' }}>
        <strong>Brrrringgggg! HackSchool is now in session!</strong> Throughout the quarter, our beginner-friendly,
        flagship web development workshop series will help you learn and utilize skills such as HTML, CSS, and React.JS
        to build your very own website! All are welcome to learn, build, code, and eat with us, so pencil HackSchool
        into your schedule! We’ll see you there!
      </p>

      <table
        style={{
          width: '100%',
          borderCollapse: 'collapse',
          marginBottom: '40px',
        }}
      >
        <thead>
          <tr>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'centre' }}>Session</th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'centre' }}>Topic</th>
            <th style={{ borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'centre' }}>Resources</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Session 1</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              Introduction to HTML, CSS, and Basic React with Vite
            </td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <a href="https://example.com/readme1" style={{ color: '#d742f5', fontWeight: 'bold' }}>README</a> ·{' '}
              <a href="https://example.com/slides1" style={{ color: '#d742f5', fontWeight: 'bold' }}>Slides</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Session 2</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              TypeScript, GitHub, and Deployment with Vercel
            </td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <a href="https://example.com/readme2" style={{ color: '#d742f5', fontWeight: 'bold' }}>README</a> ·{' '}
              <a href="https://example.com/slides2" style={{ color: '#d742f5', fontWeight: 'bold' }}>Slides</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Session 3</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              Introduction to React (Components and Props)
            </td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <a href="https://example.com/readme3" style={{ color: '#d742f5', fontWeight: 'bold' }}>README</a> ·{' '}
              <a href="https://example.com/slides3" style={{ color: '#d742f5', fontWeight: 'bold' }}>Slides</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Session 4</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              React Events and State Management
            </td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <a href="https://example.com/readme4" style={{ color: '#d742f5', fontWeight: 'bold' }}>README</a> ·{' '}
              <a href="https://example.com/slides4" style={{ color: '#d742f5', fontWeight: 'bold' }}>Slides</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Session 5</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              Navigation in React Applications
            </td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <a href="https://example.com/readme5" style={{ color: '#d742f5', fontWeight: 'bold' }}>README</a> ·{' '}
              <a href="https://example.com/slides5" style={{ color: '#d742f5', fontWeight: 'bold' }}>Slides</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Session 6</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              Advanced Topics (Tailwind CSS, Linters, VSCode Settings)
            </td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <a href="https://example.com/readme6" style={{ color: '#d742f5', fontWeight: 'bold' }}>README</a> ·{' '}
              <a href="https://example.com/slides6" style={{ color: '#d742f5', fontWeight: 'bold' }}>Slides</a>
            </td>
          </tr>
          <tr>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Session 7</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>Project Showcase</td>
            <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
              <a href="https://example.com/readme7" style={{ color: '#d742f5', fontWeight: 'bold' }}>README</a> ·{' '}
              <a href="https://example.com/slides7" style={{ color: '#d742f5', fontWeight: 'bold' }}>Slides</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default HackSchool;
