import axios from 'axios';
import React from 'react';
import { 
  Text, 
  Alert, 
  FlatList, 
  View, 
  ActivityIndicator, 
  RefreshControl, 
  TouchableOpacity,
} from 'react-native';
import { Post } from '../components/Post';


export const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading]= React.useState(true)
  const [items, setItems]= React.useState()

  const fetchPosts = () =>{
    setIsLoading(true)
    axios
    .get('https://633acafa471b8c3955751d09.mockapi.io/articles')
    .then(({data})=>{
      setItems(data);
    })
    .catch((err)=>{
      console.log(err);
      Alert.alert('Ошибка', 'Не удалось получить статьи')
    }).finally(()=>{
      setIsLoading(false)
    });
  }

  React.useEffect(fetchPosts, [])

  if(isLoading) {
    return <View 
      style={{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ActivityIndicator size="large"/>
      <Text style={{marginTop: 15}}>Загрузка ...</Text>
    </View>
  }

  return (
    <View>
      <FlatList
      refreshControl={<RefreshControl refreshing={isLoading} onRefreshing={fetchPosts}/>}
      data={items} 
      renderItem={({item})=> (
        <TouchableOpacity onPress={()=> navigation.navigate('FullPost', {id: item.id, title: item.title})}>
          <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>
        </TouchableOpacity>
      )}
      />
      
    </View>
  );
}
