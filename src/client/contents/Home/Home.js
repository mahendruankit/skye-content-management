import React from 'react';
import './Home.scss';

export default function Home() {
  return (
    <div className='content home'>
      <div className='home__logo'>
        <img src={process.env.PUBLIC_URL + '/logo512.png'} alt=''></img>
      </div>
      <div className='home__section'>
        <p>
          "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </p>
        <div className='spacer'></div>
      </div>

      <div className='home__section'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          luctus nulla. Etiam pretium a nunc sit amet dapibus. Nunc tempus
          pulvinar semper. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Curabitur orci risus, maximus sit
          amet dictum sed, luctus vel turpis. Nulla a placerat lacus. Vestibulum
          facilisis, tortor vel lacinia consequat, turpis orci elementum justo,
          eget tincidunt metus velit sit amet libero. Ut volutpat ipsum dolor,
          non egestas nulla volutpat id. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Praesent eu
          nisi consectetur, varius est aliquet, sagittis sem. Sed eleifend a
          tellus vitae tincidunt.
        </p>
        <p>
          Ut tempus non lorem sit amet tristique. Nulla et porta turpis.
          Praesent ultrices venenatis metus luctus porttitor. Curabitur
          dignissim orci erat, non malesuada arcu vestibulum ac. Vivamus
          efficitur augue tortor, nec feugiat nibh molestie ac. Integer et
          semper nulla. In vehicula nulla in scelerisque facilisis. Morbi
          pellentesque ex id diam elementum auctor. Phasellus fermentum mi odio,
          eget consectetur odio condimentum vel. Suspendisse potenti. Phasellus
          nec iaculis nunc.
        </p>
        <p>
          Donec at rhoncus orci, eget ullamcorper risus. Nam ac ex arcu. Aliquam
          non bibendum sem, dictum molestie nunc. Nunc congue urna sit amet
          pharetra eleifend. Nam feugiat pulvinar sem, eu luctus lacus viverra
          blandit. Vestibulum lacinia tempor enim vitae iaculis. Maecenas non
          vulputate velit. Phasellus accumsan et sem in mollis. Ut dictum sed
          libero in blandit. Curabitur egestas nisi id odio maximus aliquam. Sed
          blandit, leo eu gravida mattis, metus lectus varius nunc, et tempor
          urna risus et quam. Integer lacinia vulputate lacus, eu pharetra quam
          ornare vitae.
        </p>
        <div className='spacer'></div>
      </div>

      <div className='home__section'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
          luctus nulla. Etiam pretium a nunc sit amet dapibus. Nunc tempus
          pulvinar semper. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Curabitur orci risus, maximus sit
          amet dictum sed, luctus vel turpis. Nulla a placerat lacus. Vestibulum
          facilisis, tortor vel lacinia consequat, turpis orci elementum justo,
          eget tincidunt metus velit sit amet libero. Ut volutpat ipsum dolor,
          non egestas nulla volutpat id. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas. Praesent eu
          nisi consectetur, varius est aliquet, sagittis sem. Sed eleifend a
          tellus vitae tincidunt.
        </p>
        <p>
          Ut tempus non lorem sit amet tristique. Nulla et porta turpis.
          Praesent ultrices venenatis metus luctus porttitor. Curabitur
          dignissim orci erat, non malesuada arcu vestibulum ac. Vivamus
          efficitur augue tortor, nec feugiat nibh molestie ac. Integer et
          semper nulla. In vehicula nulla in scelerisque facilisis. Morbi
          pellentesque ex id diam elementum auctor. Phasellus fermentum mi odio,
          eget consectetur odio condimentum vel. Suspendisse potenti. Phasellus
          nec iaculis nunc.
        </p>
        <div className='spacer'></div>
      </div>
    </div>
  );
}
