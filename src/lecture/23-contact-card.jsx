import './23-contact-card.css';

const BackButton = () => (
  <a
    href="/"
    className="back__link"
    aria-label="이전 페이지로 이동"
    onclick="history.back(); return false;"
  >
    ←
  </a>
);

const ContactCardItem = () => (
  <li className="ContactCardItem">
    <img
      src="/yamoo9/assets/master/images/faces/woman/02.jpg"
      height={90}
      width={90}
      alt
    />
    <strong>하연주</strong>
    <dl>
      <dt>직업</dt>
      <dd>웹 디자이너</dd>
      <dt>이메일</dt>
      <dd>
        <a href="mailto:hayounju@dev.io">hayounju@dev.io</a>
      </dd>
    </dl>
  </li>
);
