import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button.tsx";
import { PostItem } from "./postItem";
import { mockPosts } from "./mockPost";
import { HeaderProfile } from "./header";

export const Feed = () => {
  return (
    <div>
      <HeaderProfile />
      <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-r from-white to-gray-100">
        <div className="flex flex-col items-center gap-4 max-w-3xl w-full px-4 mt-6">
          <Textarea
            placeholder="O que você está pensando?"
            className="w-full border border-gray-400 rounded-md text-lg min-h-[100px]"
          />
          <Button
            className="w-full bg-[#580848] hover:bg-[#7e1268] text-white px-6 py-2"
            onClick={() =>
              alert(
                "Muito obrigado por compartilhar sua ideia de negócio!\nEsperamos que o Shark-in ajude você a encontrar investidores interessados."
              )
            }
          >
            Postar
          </Button>
        </div>
        <div className="max-w-3xl mx-auto mt-6 px-4 w-full">
          {mockPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};
