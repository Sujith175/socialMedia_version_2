import { Modal, useMantineTheme } from "@mantine/core";
import PostShare from "../PostShare/PostShare";

function ProfileModal({ modalOpen, setModalOpen }) {
  const theme = useMantineTheme();

  return (
    <>
      <Modal
        size="55%"
        opened={modalOpen}
        onClose={() => setModalOpen(false)}
        overlayProps={{
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[2],
          opacity: 0.55,
          blur: 3,
        }}
      >
        <PostShare />
      </Modal>
    </>
  );
}

export default ProfileModal;
