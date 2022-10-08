import React from 'react';
import { Avatar, Comment, List, Rate, Tooltip } from 'antd';

const CommentFake = () => {
  const data = [
    {
      author: 'Hồng Anh',
      avatar: (
        <>
          <Avatar
            style={{
              color: '#f56a00',
              backgroundColor: '#fde3cf',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            HA
          </Avatar>
        </>
      ),
      content: (
        <>
          <Rate disabled defaultValue={5} />
          <p>
            Mình là sinh viên năm nhất trường ĐH kinh tế quốc dân, biết tới IELTS Tactics do một người bạn giới thiệu.
            Mình đã theo học tại IELTS từ lớp cho người mất gốc, đến nay được 9 tháng. Bản thân mình thấy trình độ tiếng
            Anh đã cải thiện rõ rệt, mặc dù học online nhưng học cảm thấy hứng không hề nhàm chán chút nào nhé, chắc
            chắn mình học với trung tâm hết khoá chinh phục 7.0 -7.5 IELTS.
          </p>
        </>
      ),
    },
    {
      author: 'Mỹ Linh',
      avatar: (
        <>
          <Avatar
            style={{
              color: '#16a085',
              backgroundColor: '#76efd7',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            ML
          </Avatar>
        </>
      ),
      content: (
        <>
          <Rate disabled defaultValue={5} />
          <p>
            Mình mới học tại IELTS Tactics thôi nhé, nhưng thực sự IELTS Tactics cho mình cảm giác học tập rất thoải
            mái, vui vẻ, giáo viên thì nhiệt tình, tâm huyết, các bạn trong lớp thì hay cũng hăng say học tập đã giúp
            cho mình thêm động lực học IELTS. Trước khi đến với IELTS Tactics mình đã học tại 1 trung tâm tiếng Anh rồi
            nhưng không đem lại hiệu quả nên mình đã bỏ giữa chừng, may quá đã chọn được nơi học phù hợp với mình. Chúc
            các bạn sẽ lựa chọn nơi học tập tốt và chinh phục điểm IELTS cao nhé.
          </p>
        </>
      ),
    },
    {
      author: 'Trần Hoàng',
      avatar: (
        <>
          <Avatar
            style={{
              color: '#2980b9',
              backgroundColor: '#9bcff1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            TH
          </Avatar>
        </>
      ),
      content: (
        <>
          <Rate disabled defaultValue={5} />
          <p style={{ textAlign: 'justify' }}>
            Anh là Hoàng, 33 tuổi, hiện tại làm trưởng phòng IT cho công ty nước ngoài, trước đây tiếng Anh mình chỉ
            giao tiếp sơ sơ thôi, trong công việc anh có 1 bạn trợ lý chuyên tiếng Anh cho mình, nhưng thực sự không có
            tiếng Anh cảm thấy bí bách khi muốn thuyết trình hay chia sẻ với đối tác nước người về ý tưởng hay kế hoạch
            công việc nhưng mình chỉ có thể giải thích tiếng Việt. Cuối cùng, qua tìm hiểu anh chọn IELTS Tactics là
            trung tâm sẽ đồng hành với mình để học IELTS target 7.5+. Đến nay học được nửa chặng đường và anh cảm thấy
            may mắn vì đã chọn nơi uy tín như mong muốn. Các em học sinh, sinh viên khi còn trẻ hãy cố gắng dành thời
            gian để học tiếng Anh càng sớm càng tốt nhé.
          </p>
        </>
      ),
    },
    {
      author: 'Lộc Trần',
      avatar: (
        <>
          <Avatar
            style={{
              color: '#8e44ad',
              backgroundColor: '#e9b6fe',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            LT
          </Avatar>
        </>
      ),
      content: (
        <>
          <Rate disabled defaultValue={5} />
          <p>
            Việc học tiếng Anh đòi hỏi sự chăm chỉ ở bản thân người học, cùng với đó tìm cho mình người đồng hành định
            hướng và dẫn lối cho chúng ta để có thể chinh phục IELTS một cách tốt nhất. Và rất may mắn cho mình đã tìm
            được cộng sự là cô cô giáo Trang dễ thương, nhiệt huyết và chị Linh support IELTS Tactics đã đồng hành với
            mình trong thời gian qua và đặc biệt các thành viên trong lớp “Chaoxin” siêu quậy đã cho mình cảm hứng học
            tập tuyệt vời.
          </p>
        </>
      ),
    },
  ];

  return (
    <div>
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment author={item.author} avatar={item.avatar} content={item.content} />
          </li>
        )}
      />
    </div>
  );
};

export default CommentFake;
