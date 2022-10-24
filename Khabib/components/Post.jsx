import styled from 'styled-components/native'

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-buttom-width: 1px;
  border-buttom-color: rgba(0, 0, 0, 0.1);
  border-buttom-style: solid;
  
`

const PostImage = styled.Image`
  width:60px; 
  height: 60px
  border-radius:12px;
  margin-right:12px;
  
  
`
const PostTitle = styled.Text`
  font-size:18px;
  font-weight:700
`
const PostData = styled.Text`
  font-size:12px;
  color:rgba(0,0,0,0.4);
  margin-top:2px;
`
const PostDetails = styled.View`
  flex: 1;
  justify-content: center;
`;

const truncateTitle = (str)=>{
  if(str.length > 50){
    return str.substring(0, 50) + '.!.'
  }
  return str;
}

export const Post =({title, imageUrl, createdAt})=>{
  return (
  <PostView>
    <PostImage
      source={{uri:imageUrl}}
    />
    <PostDetails>
      <PostTitle>{truncateTitle(title)}</PostTitle>
      <PostData>{new Date(createdAt).toLocaleDateString()}</PostData>
    </PostDetails>
</PostView>)
}
