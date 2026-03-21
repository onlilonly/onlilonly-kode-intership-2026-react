import {
    List,
    AvatarSkeleton,
    NameSkeleton,
    DepartmentSkeleton,
} from "./LoaderPage.styled";
import {
    ListCard,
    Container,
    ListInfo,
    Name,
} from "../../components/ui/UserCardUI/UserCardUI.styled";

const UserCardSkeleton = () => {
    return (
        <ListCard>
            <Container>
                <AvatarSkeleton />

                <ListInfo>
                    <Name>
                        <NameSkeleton />
                    </Name>
                    <DepartmentSkeleton />
                </ListInfo>
            </Container>
        </ListCard>
    );
};

export const UsersSkeleton = () => {
    return (
        <List>
            {Array.from({ length: 10 }).map((_, i) => (
                <UserCardSkeleton key={i} />
            ))}
        </List>
    );
};
