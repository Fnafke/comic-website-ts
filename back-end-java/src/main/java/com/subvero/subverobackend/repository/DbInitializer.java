package com.subvero.subverobackend.repository;

import java.time.LocalDate;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.subvero.subverobackend.model.Chapter;
import com.subvero.subverobackend.model.ChapterType;
import com.subvero.subverobackend.model.Role;
import com.subvero.subverobackend.model.User;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;

@Component
public class DbInitializer {

        private final UserRepository userRepository;
        private final ChapterRepository chapterRepository;
        private final PasswordEncoder passwordEncoder;

        @Value("${subvero.admin.username}")
        private String adminUsername;

        @Value("${subvero.admin.email}")
        private String adminEmail;

        @Value("${subvero.admin.password}")
        private String adminPassword;

        public DbInitializer(UserRepository userRepository, ChapterRepository chapterRepository,
                        PasswordEncoder passwordEncoder) {
                this.userRepository = userRepository;
                this.chapterRepository = chapterRepository;
                this.passwordEncoder = passwordEncoder;
        }

        public void deleteAll() {
                this.userRepository.deleteAll();
                this.chapterRepository.deleteAll();
        }

        @PostConstruct
        public void init() {
                deleteAll();

                final var admin = userRepository.save(new User(adminUsername, adminEmail,
                                this.passwordEncoder.encode(adminPassword), Role.Admin));

                final var draftChapter1 = chapterRepository
                                .save(new Chapter(1, "liWKLsE", "Part 1: The World vs. Made In Heaven",
                                                "The fierce battle between them begins and... concludes? What is there more we don't know of?",
                                                "88RpG1b", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter2 = chapterRepository.save(new Chapter(2, "b5i5lOd",
                                "Part 2: The World vs. Killer Queen",
                                "2 years have passed since a person with powers attacked our main protagonist? Who is he and who is he working with? What do they want?",
                                "9qeLKCL", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter3 = chapterRepository.save(new Chapter(3, "DKbvzHA", "The Intruder",
                                "Jotaro gets ambushed by another person of Dio's organisation, but he escapes and has acquired the coordinates to a hidden pyramid. On his way he gets ambushed again. What's next for him?",
                                "hHjXfWs", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter4 = chapterRepository.save(new Chapter(4, "BLUZ4Se", "Zaraki Kenpachi",
                                "Jotaro and Shinji are on their way to retrieve the Reqiuem Arrow, but, they realise that they're not alone.",
                                "lZlvQNO", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter5 = chapterRepository.save(new Chapter(5, "jbzbWqt", "Bankai",
                                "In the middle of grief, Shinji Hirako continues his battle with Zaraki Kenpachi and seems to have finally gotten the advantage on Zaraki. But is Shinji's power enough to stop that monster?",
                                "nUxQYR4", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter6 = chapterRepository.save(new Chapter(6, "R5mLfrC", "Gojo Satoru",
                                "After a hard fought battle, Gojo Satoru mixed his red and blue abilities to form his maximum ability called 'Purple'. Is this the end for Shinji Hirako?",
                                "qwpda49", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter7 = chapterRepository.save(new Chapter(7, "FRFH2jH", "The Resurrection",
                                "After defeating Gojo Satoru, Jotaro Kujo and Shinji Hirako made their way to the hidden garden on the other side of the pyramid, where they are confronted by Diavolo holding the Reqiuem Arrow. What is his goal?",
                                "SMoG2ek", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter8 = chapterRepository.save(new Chapter(8, "JpH3hGv", "Made In Heaven",
                                "As planned by Dio Brando himself, his resurrection has been realised. With the Reqiuem Arrow in his grasp, he's sure to become unstoppable.",
                                "DqSGQhl", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter9 = chapterRepository.save(new Chapter(9, "gl7hL3r", "The World of Stopped Time",
                                "Unbound by the seals on his body, Dio Brando is now able to freely use all his power and the 3 of them seem to be no match for him. How are they going to stop him?",
                                "smlayNs", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter10 = chapterRepository.save(new Chapter(10, "kQAN32O", "Shinji Hirako",
                                "Dio obtained the power to put time to a halt and he wants to make sure no one makes it past the end.",
                                "zLy1ClX", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter11 = chapterRepository.save(new Chapter(11, "mp5ULy8", "Two centimeters",
                                "Shinji remembers what happened to him and his friends and has entered his True Bankai form. Unable to control it, he jumps at Dio. Is he finally going to defeat him?",
                                "0EIGpzy", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter12 = chapterRepository.save(new Chapter(12, "iVxyl9f", "The sole survivor",
                                "Dio defeated everyone... or did he? There is one person standing, one desperate attempt left to defeat this god like being.",
                                "lNDdQfp", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter13 = chapterRepository.save(new Chapter(13, "88UDZIf", "Hell",
                                "Dio's stand Made In Heaven has evolved and is able to transport all of humanity to another universe, but before doing that, he wants to get rid of Jotaro.",
                                "tahIXvo", ChapterType.Draft, LocalDate.of(2025, 2, 24)));

                final var draftChapter14 = chapterRepository.save(new Chapter(14, "RG6W2bq", "Minor Inconvenience",
                                "Dio welcomes Jotaro to his Hell. The heat is unbearable but Jotaro seems to bare it. The cards are in Jotaro's favour... is this their final clash?",
                                "gtfGKxR", ChapterType.Draft, LocalDate.of(2025, 3, 3)));

                final var draftChapter15 = chapterRepository.save(new Chapter(15, "mm5RMjV", "The Awakening",
                                "Dio Brando is 20 years old and still has not awakened his powers yet. Genryusai Yamamoto, Dio's best friend, reassures him that he's better off not awakening his powers but Dio is envious of him.",
                                "DfKkKFo", ChapterType.Draft, LocalDate.of(2025, 3, 10)));

                final var draftChapter16 = chapterRepository.save(new Chapter(16, "EIeL2NH", "The Beginning of the End",
                                "Dio shares with Yamamoto that he finally awakened his powers and that they can finally save their kind from discrimination. Yamamoto isn't too fond of Dio's vision on 'saving the world', it doesn't align with his. What does this mean for Dio now...?",
                                "FXGO5zV", ChapterType.Draft, LocalDate.of(2025, 3, 17)));

                final var draftChapter17 = chapterRepository.save(new Chapter(17, "REnQp2u", "The Sealing",
                                "After his massive show in the courtroom, Dio got sent to the underground prison, there he got a visit from the person whom he'll loathe forever.",
                                "EMrajsK", ChapterType.Draft, LocalDate.of(2025, 3, 23)));

                final var draftChapter18 = chapterRepository.save(new Chapter(18, "1lwhXpj", "High-Rise Invasion",
                                "100 years have passed since the sealing of Dio Brando and an army emerges at the edges of the British lands. An unexpected invasion begins!",
                                "x5X1Wra", ChapterType.Draft, LocalDate.of(2025, 3, 30)));

                final var draftChapter19 = chapterRepository.save(new Chapter(19, "VtZ7cfU",
                                "You sure can put up a fight!",
                                "The clash between the German Captain and Yulker Musalim begins! Will Yulker succeed in protecting everyone?",
                                "M4wwaNQ", ChapterType.Draft, LocalDate.of(2025, 4, 7)));

        }
}
