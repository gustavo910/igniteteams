import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { FlatList } from "react-native";
import { useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Players(){
    const [team,setTeam]= useState('Time A');
    const [players,setPlayers]= useState(['Gustavo','viana']);


    return (
        <Container>
            <Header showBackButton />
            <Highlight 
            title="Nome da turma"
            subtitle="adicione a galera e separe os times"
            />
            <Form>
            <Input
            placeholder="Nome da pessoa"
            autoCorrect
            />
            <ButtonIcon icon="add"/>
            </Form>
            <HeaderList>
            <FlatList 
            data={['Time A', 'time B']}
            keyExtractor={item=>item}
            renderItem={({item})=>(
                <Filter 
                isActive={item === team}
                title={item} 
                onPress={()=>setTeam(item)}
                />
            )}
            horizontal
            />
            <NumberOfPlayers>{players.length}</NumberOfPlayers>
            </HeaderList>
            <FlatList 
            data={players}
            keyExtractor={item => item}
            renderItem={({item})=>(
                <PlayerCard 
                name={item} 
                onRemove={()=>{}}
                />
            )}
            ListEmptyComponent={()=>(
                <ListEmpty message="Não há pessoas nesse time."/>
            )}
            showsVerticalScrollIndicator ={false}
            contentContainerStyle={[
            {paddingBottom:100},
            players.length === 0 && {flex: 1}
            ]}
            />
            <Button type="SECONDARY" title="Remover turma"  />
            
        </Container>
    )

}