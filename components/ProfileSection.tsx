function ProfileSection() {
  return (
    <div className="flex p-4 @container">
      <div className="flex w-full flex-col gap-4 items-center">
        <div className="flex gap-4 flex-col items-center">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
            style={{
              backgroundImage:
                'url("images/bookstore_pic.jpeg")',
            }}
          ></div>
          <div className="flex flex-col items-center justify-center justify-center">
            <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">
              Jeffrey Chow
            </p>
            <p className="text-[#9cabba] text-base font-normal leading-normal text-center">
              Software Developer | Problem Solver | Former Biochemist
            </p>
            <br></br>
            <p className="text-[#9cabba] text-base font-normal leading-normal text-center">
              Driven full-stack developer with a passion for building impactful
              software. With experience in web development, serverless AWS apps,
              and a growing focus on cybersecurity and biotech, I thrive at the
              intersection of creativity and problem-solving. Let’s turn bold
              ideas into scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
