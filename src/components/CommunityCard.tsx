import styled from 'styled-components';
import { Link } from 'react-router-dom';

function CommunityCard() {
  return (
    <Container>
      <div>
        <Label color={'#FFFFFF'} backgroundColor={'#7471FF'}>
          조회수 TOP
        </Label>
        <Label color={'#212121'} backgroundColor={'#CCCCCC'}>
          취업 고민
        </Label>
      </div>

      <Title>합격 메일 답장 어떻게 할까요?</Title>
      <Contents>고칠 부분이 있는지 봐주시면 감사하겠습니다!</Contents>

      <Respondents>
        <Mentor>
          <Profile />
          <div>
            <NickName>멘토1342</NickName>
            <Comment>안녕하세요. 먼저 면접까지...</Comment>
          </div>
        </Mentor>

        <Mentor>
          <Profile />
          <div>
            <NickName>멘토1342</NickName>
            <Comment>안녕하세요. 먼저 면접까지...</Comment>
          </div>
        </Mentor>
      </Respondents>
      <ViewMore>+더보기</ViewMore>
    </Container>
  );
}
export default CommunityCard;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 224px;
  height: 320px;
  border-radius: 10px;
  border: 1px solid black;
  padding: 16px;

  > div:nth-child(1) {
    display: flex;
    > div:not(:last-child) {
      margin-right: 8px;
    }
  }
`;

const Label = styled.div`
  height: 22px;
  padding: 4px;
  border-radius: 4px;
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  text-align: center;
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.01em;
  float: left;
  margin-bottom: 8px;
`;

const Title = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  letter-spacing: -0.01em;
  margin-bottom: 10px;
`;

const Contents = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.01em;
`;

//TODO: 컴포넌트화 하기
const Respondents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  height: 84px;
  margin-top: auto;
  margin-bottom: 16px;
`;

const Mentor = styled.div`
  display: flex;
`;

const Profile = styled.div`
  width: 30px;
  height: 30px;
  background: #eeeeee;
  margin: 3px 8px 0px 0px;
  border-radius: 50%;
`;

const NickName = styled.div`
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: -0.01em;
  margin-bottom: 3px;
`;

const Comment = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const ViewMore = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #24dbaf;
  cursor: pointer;
`;
