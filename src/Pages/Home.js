import React from 'react'
import Bodyone from '../components/Content/Bodyone/Bodyone';
import Cryptoprice from '../components/Content/Cryptoprice/Cryptoprice';
import Grow from '../components/Content/Grow/Grow '
import Themosttrusted from '../components/Content/Themosttrusted/Themosttrusted';
import Howtotrade from '../components/Content/Howtotrade/Howtotrade';
import Unicoindigital from '../components/Content/Unicoindigital/Unicoindigital';
import Licenseregulation from '../components/Content/Licenseregulation/Licenseregulation';
import Buyandsell from '../components/Content/Buyandsell/Buyandsell';
import Platformsecurity from '../components/Content//Platformsecurity/Platformsecurity';
import Marketupdates from '../components/Content/Marketupdates/Marketupdates';
import Layout from '../components/Layout/Layout';
export default function Home() {
  return (
    <div>
      <Layout>
     <Bodyone/>
     <Cryptoprice/>
     <Grow/>
     <Themosttrusted/>
     <Howtotrade/>
     <Unicoindigital/>
     <Licenseregulation/>
     <Buyandsell/>
     <Platformsecurity/>
     <Marketupdates/>
     </Layout>
    </div>
  )
}