import { Modal, useMantineTheme } from "@mantine/core";
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
        <form className="infoForm">
          <h3>Your Info</h3>
          <div>
            <input
              className="infoInput"
              type="text"
              placeholder="First Name"
              name="firstname"
            />
            <input
              className="infoInput"
              type="text"
              placeholder="Last Name"
              name="lastname"
            />
          </div>
          <div>
            <input
              className="infoInput"
              type="text"
              placeholder="Works At"
              name="worksAt"
            />
          </div>
          <div>
            <input
              className="infoInput"
              type="text"
              placeholder="Lives In"
              name="livesIN"
            />
            <input
              className="infoInput"
              type="text"
              placeholder="Country"
              name="country"
            />
          </div>
          <div>
            <input
              className="infoInput"
              type="text"
              placeholder="Relationship Status"
              name="worksAt"
            />
          </div>
          <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
          </div>
          <button className="button infoButton">Update</button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;
