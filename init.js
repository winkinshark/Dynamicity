import Button from '../components/Button';
import dynamic from 'next/dynamic';
const RemoteButton = dynamic(() => import('remote/Button'), {
  ssr: false,
});
export default function Home() {
  return (
    <div style={{ padding: '2%' }}>
  
      <h2>Hosts - Button</h2>
      <Button />
      <h2>For client - Button</h2>
      <RemoteButton />
    </div>
  ); 
}     
