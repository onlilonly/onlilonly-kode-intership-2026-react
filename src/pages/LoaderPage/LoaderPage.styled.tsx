import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

const SkeletonBlock = styled.div`
    background: linear-gradient(90deg, #f2f2f3 25%, #e6e6e7 37%, #f2f2f3 63%);
    background-size: 400% 100%;
    animation: ${shimmer} 1.2s ease-in-out infinite;
    border-radius: 8px;
`;
export const List = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 0 16px;
    margin-top: 16px;
    gap: 4px;
`;

export const AvatarSkeleton = styled(SkeletonBlock)`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  margin: 6px 16px 6px 0;
`;

export const NameSkeleton = styled(SkeletonBlock)`
  width: 160px;
  height: 16px;
  margin-top: 17px;
`;

export const DepartmentSkeleton = styled(SkeletonBlock)`
  width: 100px;
  height: 12px;
  margin-top: 6px;
`;