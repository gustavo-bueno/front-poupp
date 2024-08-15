import React, { useState, useRef, useEffect } from "react";
import { View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/core";

import { AntDesign } from "@expo/vector-icons";

import AddExtraIncomeGoalModal from "./AddExtraIncomeGoalModal";
import MiniCard from "../../components/MiniCard";
import { H0, H1, H2, H3 } from "../../components/Text";
import Button from "../../components/Button";
import PostCard from "../../components/PostCard";
import { ProgressBar } from "../../components/ProgressBar";
import { BorderRadiusContainer } from "../../components/Container";
import { ROUTES } from "../../constants/routes";
import { colors, metrics } from "../../styles";
import { NoGoalsContainer, NoGoalsContent, Title } from "./styles";
import { IPost } from "../../models/post";
import { IExtraIncomeGoal } from "../../models/extraIncomeGoal";
import RBSheet from "react-native-raw-bottom-sheet";
import Ripple from "react-native-material-ripple";
import { SheetButton } from "./AddExtraIncomeGoalModal/styles";
import AddValueGoalModal from "./AddGoalValueModa.tsx";
import apiRequest from "../../services/apiRequest";
import { AxiosResponse } from "axios";
import useUserData from "../../hooks/useUserData";
import { Loading } from "../../components/Loading";
import NumberToMoney from "../../functions/NumberToMoney";

const ExtraIncomeScreen: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [addValueModalOpen, setAddValueModalOpen] = useState(false);
  const { navigate } = useNavigation();
  const { user, refresh, refreshData } = useUserData();

  const [posts, setPosts] = useState<IPost[]>([]);
  const [extraIncomeGoals, setExtraIncomeGoals] = useState<IExtraIncomeGoal[]>(
    []
  );
  const [activeExtraIncomeGoal, setActiveExtraIncomeGoal] =
    useState<IExtraIncomeGoal>();
  const [postsLoading, setPostsLoading] = useState<boolean>(true);

  useEffect(() => {
    const options = {
      headers: { Authorization: `Bearer ${user.token}` },
      params: { topic: "extraincome" },
    };

    apiRequest
      .get("/posts", options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setPosts(response.data);
          setPostsLoading(false)
        }
      })
      .catch((err) => console.log(err));

    apiRequest
      .get("/extraincomegoals", { headers: options.headers })
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          setExtraIncomeGoals(response.data);
        }
      })
      .catch((err) => console.log(err));
  }, [refresh]);

  const renderExtraIcomePost = ({ item }: { item: IPost }) => (
    <MiniCard
      onPress={() => navigate(ROUTES.POST_DETAIL, { post: item })}
      title={item.title}
      image={item.image}
    />
  );

  const renderExtraIncomeGoalItem = ({ item, index }: { item: IExtraIncomeGoal, index: number }) => {
    const percentage = item.reachedValue / item.totalValue;
    return (
      <Ripple
        onPress={() => {
          setActiveExtraIncomeGoal(item);
          sheetRef.current?.open();
        }}
      >
        <PostCard
          style={{ marginLeft: metrics.base }}
          content={
            <View style={{ paddingHorizontal: metrics.base * 2.5 }}>
              <H0 style={{ fontSize: 24, marginVertical: metrics.base }}>
                R$ {NumberToMoney(item.totalValue)}
              </H0>
              <ProgressBar progress={percentage} />
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <H3 color="text">
                  <H2>
                    R$ {NumberToMoney(item.reachedValue)}
                    {" arrecadado"}
                  </H2>
                </H3>
                <H2 color="text">{Math.ceil(percentage * 100)}% concluído</H2>
              </View>
            </View>
          }
          image={item.category.image}
        />
      </Ripple>
    );
  };

  const sheetRef = useRef<RBSheet>(null);

  const removeExtraIncomeGoal = () => {
    const options = {
      headers: { authorization: `Bearer ${user.token}` },
      params: { extraIncomeGoalId: activeExtraIncomeGoal?._id },
    };

    apiRequest
      .delete("/extraincomegoals/delete", options)
      .then((response: AxiosResponse) => {
        if (response.status === 200) {
          refreshData();
          sheetRef.current?.close();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={{ backgroundColor: colors.green }}>
      <BorderRadiusContainer>
        <Title>Minhas metas</Title>
        {extraIncomeGoals.length === 0 ? (
          <NoGoalsContainer>
            <NoGoalsContent>
              <H2>Você ainda não possui metas :(</H2>
            </NoGoalsContent>
          </NoGoalsContainer>
        ) : (
          <FlatList
            style={{
              maxHeight: metrics.hp(25),
            }}
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
            }}
            data={extraIncomeGoals}
            keyExtractor={(_, idx) => idx.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderExtraIncomeGoalItem}
          />
        )}
        <Button
          onPress={() => setModalOpen(true)}
          style={{ marginTop: metrics.base * 2 }}
          title="Adicionar meta"
        />
        <H1
          fontWeight="bold"
          style={{
            marginVertical: metrics.base * 4,
          }}
        >
          Que tal?
        </H1>
        {postsLoading ? (
          <Loading />
        ) : (
          <FlatList
            data={posts}
            keyExtractor={(_, idx) => idx.toString()}
            renderItem={renderExtraIcomePost}
          />
        )}
      </BorderRadiusContainer>
      <AddExtraIncomeGoalModal
        visible={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      />
      {activeExtraIncomeGoal && (
        <AddValueGoalModal
          visible={addValueModalOpen}
          extraIncome={activeExtraIncomeGoal}
          onRequestClose={() => setAddValueModalOpen(false)}
        />
      )}

      <RBSheet
        customStyles={{
          container: {
            borderRadius: metrics.borderRadius,
          },
        }}
        height={metrics.hp(25)}
        ref={sheetRef}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", height: 40 }}
        >
          <AntDesign name="minus" size={40} color={colors.gray} />
        </View>
        <SheetButton
          onPress={() => {
            setAddValueModalOpen(true);
            sheetRef.current?.close();
          }}
        >
          <H2 color="green">Adicionar valor</H2>
        </SheetButton>
        <SheetButton
          style={{ borderTopWidth: 0 }}
          onPress={removeExtraIncomeGoal}
        >
          <H2>Apagar meta</H2>
        </SheetButton>
      </RBSheet>
    </View>
  );
};

export default ExtraIncomeScreen;
