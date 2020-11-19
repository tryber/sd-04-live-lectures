const connection = require('./simpleConnection');

const getPostWithCommentsById = async (postId) => {
  const session = await connection();
  const result = await session.sql(
    `SELECT c.title as title_comment, p.title as title_post
    FROM comments AS c
    INNER JOIN posts AS p ON p.id = c.post_id
    WHERE p.id=?`
  )
    .bind(postId)
    .execute()
    .then((results) => results.fetchAll())
    .then((comments) => comments.map(
      ([title_comment, title_post]) => ({ title_comment, title_post }),
    ));
  if (!result.length) return null;
  return result;
};